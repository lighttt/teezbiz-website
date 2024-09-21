'use client';
import AppImages from '@/src/core/constants/app_images';
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef } from 'react';
import './carousel.css'; // Import the CSS file
import { NextButton, PrevButton, usePrevNextButtons } from './carousel_button';

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 2000 })]);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);
    const TWEEN_FACTOR_BASE = 0.2;

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            if (!emblaApi) return;
            const autoplayPlugin = emblaApi.plugins().autoplay;
            if (!autoplayPlugin) return;

            autoplayPlugin.stop(); // Stop autoplay
            callback(); // Perform the button action
            setTimeout(() => {
                autoplayPlugin.reset();
                autoplayPlugin.play();
            }, 500); // Reset and restart autoplay
        },
        [emblaApi]
    );

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__parallax__layer') as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === 'scroll';

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
                const tweenNode = tweenNodes.current[slideIndex];
                tweenNode.style.transform = `translateX(${translate}%)`;
            });
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax);
    }, [emblaApi, tweenParallax]); // eslint-disable-react-hooks/exhaustive-deps

    return (
        <section className="embla flex flex-row items-center">
            <div>
                <PrevButton onClick={() => onButtonAutoplayClick(onPrevButtonClick)} disabled={prevBtnDisabled} />
            </div>

            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer">
                                    <Image
                                        className="embla__slide__img embla__parallax__img"
                                        src={AppImages.banners[index]}
                                        alt="Your alt text"
                                        width={350}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <NextButton onClick={() => onButtonAutoplayClick(onNextButtonClick)} disabled={nextBtnDisabled} />
            </div>
        </section>
    );
};

export default Carousel;
