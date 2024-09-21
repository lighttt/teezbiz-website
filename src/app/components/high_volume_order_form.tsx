'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button, MenuItem, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    websiteURL: Yup.string().url('Invalid URL'),
    averageItems: Yup.string().required('This field is required'),
    additionalInfo: Yup.string(),
});

const HighVolumeOrderForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            websiteURL: '',
            averageItems: '',
            additionalInfo: '',
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await formik.validateForm(); // Trigger form validation
                if (Object.keys(formik.errors).length === 0) {
                    console.log('Form is valid. Submitting form:', values);
                } else {
                    console.log('Form has errors. Submission halted.');
                }
            } catch (error) {
                console.error('Validation error:', error);
            } finally {
                setSubmitting(false);
            }
        },
        validateOnBlur: false, // Validate only on submit, not on change or blur
        validateOnChange: false,
    });

    const { handleChange, handleBlur, values, errors, touched, handleSubmit } = formik;

    return (
        <section className="relative w-full px-12">
            {/* Background image and blur effect */}
            <div className="absolute inset-12 bg-form bg-cover bg-center"></div> {/* Background Image */}
            <div className="absolute inset-0 backdrop-blur-sm"></div> {/* Slight Blur over the background */}
            {/* Form Container */}
            <div className="relative mx-auto flex w-full flex-col items-center py-10 bg-white/20 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="mb-6 w-full text-center text-3xl font-semibold leading-[120%] md:text-5xl">Ordering in high volumes?</h3>
                <p className="text-center text-xl">{`Get in touch with TeezBiz's experts`}</p>

                <form onSubmit={handleSubmit} className="grid w-full max-w-lg gap-4 mt-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Full name */}
                        <TextField
                            name="fullName"
                            label="Full name"
                            variant="outlined"
                            fullWidth
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.fullName && Boolean(errors.fullName)}
                            helperText={touched.fullName && errors.fullName}
                            sx={{ backgroundColor: 'white' }} // Set background color to white
                        />

                        {/* Email */}
                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            sx={{ backgroundColor: 'white' }} // Set background color to white
                        />
                    </div>

                    {/* Phone number */}
                    <TextField
                        name="phoneNumber"
                        label="Phone number"
                        variant="outlined"
                        fullWidth
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                        helperText={touched.phoneNumber && errors.phoneNumber}
                        sx={{ backgroundColor: 'white' }} // Set background color to white
                    />

                    {/* Website URL */}
                    <TextField
                        name="websiteURL"
                        label="Website URL"
                        variant="outlined"
                        fullWidth
                        value={values.websiteURL}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.websiteURL && Boolean(errors.websiteURL)}
                        helperText={touched.websiteURL && errors.websiteURL}
                        sx={{ backgroundColor: 'white' }} // Set background color to white
                    />

                    {/* Average items per month */}
                    <TextField
                        name="averageItems"
                        select
                        label="How many items do you fulfill on average per month?"
                        variant="outlined"
                        fullWidth
                        value={values.averageItems}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.averageItems && Boolean(errors.averageItems)}
                        helperText={touched.averageItems && errors.averageItems}
                        sx={{ backgroundColor: 'white' }} // Set background color to white
                    >
                        <MenuItem value="" disabled>
                            -- Select an option --
                        </MenuItem>
                        <MenuItem value="1-100">1-100</MenuItem>
                        <MenuItem value="101-500">101-500</MenuItem>
                        <MenuItem value="501-1000">501-1000</MenuItem>
                        <MenuItem value="1000+">1000+</MenuItem>
                    </TextField>

                    {/* Additional information */}
                    <TextField
                        name="additionalInfo"
                        label="Any other information you want us to know?"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={values.additionalInfo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.additionalInfo && Boolean(errors.additionalInfo)}
                        helperText={touched.additionalInfo && errors.additionalInfo}
                    />
                    <Button
                        type="submit"
                        variant="text"
                        className="mt-5 w-full"
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '2rem',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Hover effect
                            },
                            transition: 'background-color 300ms ease-in-out',
                        }}
                    >
                        SEND MESSAGE
                        <div className="w-6 h-6 flex justify-center items-center rounded-full bg-white ml-2">
                            <ArrowRightIcon className="w-4 h-4 text-black" />
                        </div>
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default HighVolumeOrderForm;
