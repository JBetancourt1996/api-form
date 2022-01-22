import { extend } from "vee-validate";
import { required, alpha, email, numeric } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "This field is required "
});
extend("alpha", {

    ...alpha, message: "The alpha_field field may only contain alphabetic characters"
});

extend("email", {

    ...email, message: "The email field must be a valid email"
});

extend("phone", {
    ...numeric,
    message: "The field field format is invalid"
})
