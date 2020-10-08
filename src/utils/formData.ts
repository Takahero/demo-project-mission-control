const signUpFormData = [
    {
        label: "First Name",
        value: "firstName",
        placeholder: "Type your firstName"
    },
    {
        label: "Last Name",
        value: "lastName",
        placeholder: "Type your lastName"
    },
    {
        label: "Email",
        value: "email",
        placeholder: "Type your email",
        type: "email"
    },
    {
        label: "Password",
        value: "password",
        placeholder: "Type your password",
        type: "password"
    },
];

const signInFormData = [
    {
        label: "Email",
        value: "email",
        placeholder: "Type your email",
        type: "email"
    },
    {
        label: "Password",
        value: "password",
        placeholder: "Type your password",
        type: "password"
    },
];

export {
    signUpFormData,
    signInFormData
}