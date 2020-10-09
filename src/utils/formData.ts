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

const projectFormData = [
    {
        label: "Project Name",
        value: "projectName",
        placeholder: "Type Your Project Name",
    },
    {
        label: "Start Date",
        value: "startDate",
        placeholder: "Choose Your Start Date",
        type: "Date"
    },
    {
        label: "End Date",
        value: "endDate",
        placeholder: "Choose Your End Date",
        type: "Date"
    },
    {
        label: "Accomplishment Statement",
        value: "accomplishmentStatement",
        placeholder: "Type Your Accomplishment Statement",
        as: "textarea"
    },
];

export {
    signUpFormData,
    signInFormData,
    projectFormData,
}