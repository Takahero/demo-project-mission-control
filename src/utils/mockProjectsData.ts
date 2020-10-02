export const mockProjects = [
    {
        name: "Get 6 pack",
        startDate: new Date(2020, 9, 1),
        endDate: new Date(2020, 11, 12),
        author: 
        // !userid will come here instead of an object
            {
                firstName: "Takahiro",
                lastName: "Hasegawa",
            },
        accomplishmentStatement: "I'm feeling so great and looking amazing! This is the best shape I have ever got in my life. My instagram would be on fire!!",
        requiredResults: [
            {
                name: "Complete Thenx's Advanced Calisthenics Program",
                startDate: new Date(2020, 9, 1),
                endDate: new Date(2020, 10, 12),
                toDos: [
                    {
                        name: "Complete Intermediate Program",
                        completed: false
                    },
                    {
                        name: "Complete Intermediate Program",
                        completed: false
                    },
                    {
                        name: "Complete Intermediate Program",
                        completed: false
                    },
                    
                ]
            },
            {
                name: "Complete Thenx's Advanced Calisthenics Program",
                startDate: new Date(2020, 9, 1),
                endDate: new Date(2020, 10, 12),
                toDos: [
                    {
                        name: "Complete Intermediate Program",
                        completed: false
                    },
                    {
                        name: "Complete Intermediate Program",
                        completed: false
                    },
                    {
                        name: "Complete Intermediate Program",
                        completed: false
                    },
                    
                ]
            },
        ]
    },
    {
        name: "Get 6 pack",
        startDate: new Date(2020, 9, 1),
        endDate: new Date(2020, 11, 12),
        author: 
        // !userid will come here instead of an object
            {
                firstName: "Takahiro",
                lastName: "Hasegawa",
            },
        accomplishmentStatement: "I'm feeling so great and looking amazing! This is the best shape I have ever got in my life. My instagram would be on fire!!",
        requiredResults: []
    },
]

export const mockProjectDates = {
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2020, 11, 12),
}