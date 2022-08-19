export interface Certification {
    icon: String;
    earn_date: String;
    title: String;
    description: String;
}



export const CERTIFICATIONS: Certification[] = [
    {  
        icon: '../assets/Azure.Fundamental_Icon.png',
        earn_date: '07/2020',
        title: 'Microsoft Certified - Azure Fundamentals',
        description: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.' 
    },
    { 
        icon: '../assets/AWS-Certified-Cloud-Practitioner_Icon.png',
        title: 'AWS Certified Cloud Practitioner',
        earn_date: '02/2021',
        description: 'This credential helps organizations identify and develop talent with critical knowledge related to implementing cloud initiatives. Earning AWS Certified Cloud Practitioner validates cloud fluency and foundational AWS knowledge.'
    },
    { 
        icon: '../assets/Oracle_SQL_Associate_Icon.png',
        earn_date: '03/2022',
        title: 'Oracle Database SQL Certified Associate',
        description: 'By passing this exam, a certified individual proves fluency in and a solid understanding of SQL language, data modeling and using SQL to create and manipulate tables in an Oracle Database. Qualified candidates have knowledge of general computing concepts, knowledge of command line interfaces and experience working in command line.' 
    },
    { 
        icon: '../assets/Python_Certified_Icon.png',
        earn_date: '11/2018',
        title: 'PCAP - Certified Associate in Python Programming',
        description: 'The PCAP™ certification shows that the individual is familiar with the following concepts: modules, packages, and PIP, character encoding, strings and string processing, generators, iterators, closures, files, file streams, and file processing, exception hierarchies, and exception classes and objects, working with selected Standard Library modules, and the fundamentals of the Object-Oriented Programming (OOP) approach.' 
    },
    { 
        icon: '../assets/CertifiedScrumMaster.png',
        earn_date: '03/2021',
        title: 'Scrum Alliance - Certified Scrum Master',
        description: 'Demonstrate knowledge through the gold standard of agile certification to guide teams to effectively use Scrum and understand why Scrum values are so important by expanding the professional community and improving leadership skills by influencing organizational change.'
    },
    { 
        icon: '../assets/CompTIA_SecurityPlus_Icon.png',
        earn_date: '03/2022',
        title: 'CompTIA Security+',
        description: 'CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.'
     },
     { 
        icon: '../assets/CompTIA_NetworkPlus_Icon.png',
        earn_date: '03/2022',
        title: 'CompTIA Network+',
        description: 'CompTIA Network+ validates the technical skills needed to securely establish, maintain and troubleshoot the essential networks that businesses rely on.'
     }
];