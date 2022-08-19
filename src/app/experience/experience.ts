import { ArrayType } from "@angular/compiler";

export interface Experience {
    daterange: String;
    company: String;
    location: String;
    jobrole: String;
    url: String;
    positionList: Array<Position>;

}

export interface Position {
    title: String;
    taskList: Array<Tasklist>;
}

export interface Tasklist {
    description: String;
}

export const EXPERIENCE: Experience[] = [
    {
        daterange: '10/2020 -> Present',
        company: 'Definitive Logic',
        location: 'Arlington, VA',
        jobrole: 'Azure Cloud Engineer / Oracle DBA',
        url: 'https://www.definitivelogic.com',
        positionList : [
            {
                title: 'Microsoft Azure Engineer / Oracle DBA / RHEL SysAdmin',
                taskList: [
                    {
                        description: 'Maintain internal DNS servers within the Windows domain'
                    },
                    {
                        description: 'Maintain internal DNS servers within the Windows domain'
                    }
                ]
            }
        ]
    },
    {
        daterange: '09-2004 -> 10/2020',
        company: 'Leidos Defense / Lockheed Martin',
        location: 'Dayton, OH',
        jobrole: 'Azure Cloud Engineer / Oracle DBA',
        url: 'https://www.definitivelogic.com',
        positionList: [
            {
                title: 'Microsoft Azure Engineer / Oracle DBA / RHEL SysAdmin',
                taskList: [
                    {
                        description: 'Maintain internal DNS servers within the Windows domain'
                    }
                ]
            }
        ]
    }
]