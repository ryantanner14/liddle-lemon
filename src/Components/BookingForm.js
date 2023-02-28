import React, { useEffect } from "react";
import { useFormik, useField, useFormikContext } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
// import { useAlertContext } from "../context/alertContext";
import { ThemeContext } from "@emotion/react";

const BookingForm = () => {
    const { isLoading, response, submit } = useSubmit();
    // const { onOpen } = useAlertContext();

    useEffect(() => {
        if (response) {
            // onOpen(response.type, response.message);
        }
    }, [response]);


    const formik = useFormik({
        initialValues: {
            date: '',
            email: '',
            type: 'hireMe',
            guestCount: '',
        },
        onSubmit: (values, actions) => {
            submit('https://google.com', values).then(() => {
                actions.resetForm({
                    date: '',
                    email: '',
                    type: 'hireMe',
                    guestCount: '',
                });

            });
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Date is Required"),
            time: Yup.string().email("Email invalid").required("Time Required"),
            type: Yup.string().notRequired(),
            guestCount: Yup.number().required("Numbers of guests required"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#333333"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Reservation Form
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                                <FormLabel htmlFor="date">Date</FormLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    type="text"
                                    onChange={formik.handleChange}
                                    {...formik.getFieldProps('date')}
                                />
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="time">Time</FormLabel>
                                <Select id="time" name="time">
                                    <option value="five">17:00</option>
                                    <option value="six">18:00</option>
                                    <option value="seven">19:00</option>
                                    <option value="eight">20:00</option>
                                    <option value="nine">21:00</option>
                                    <option value="ten">22:00</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                <Select id="occasion" name="occasion">
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.guestCount && formik.errors.guestCount}>
                                <FormLabel htmlFor="guestCount">How many guests in your party?</FormLabel>
                                <Textarea
                                    id="guestCount"
                                    name="guestCount"
                                    type="number"
                                    onChange={formik.handleChange}
                                    {...formik.getFieldProps('guestCount')}
                                />
                                <FormErrorMessage>{formik.errors.guestCount}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="yellow" width="full" isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default BookingForm;
