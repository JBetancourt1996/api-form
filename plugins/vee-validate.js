import {
    extend
} from "vee-validate";
import {

    required,
    alpha,
    email,
    digits
} from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "Este campo es obligatorio "
});
extend("alpha", {

    ...alpha,
    message: "El campo alpha_field solo puede contener caracteres alfabéticos"
});

extend("email", {

    ...email,
    message: "El campo debe ser un correo electrónico válido."
});

extend("digits", {
    ...digits,
    message: "Tiene que ser 8 números."
});