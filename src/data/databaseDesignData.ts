
export interface EssaySubQuestion {
  number: string;
  required: boolean;
  task: string;
  marks: number;
  information?: any;
}

export interface EssayQuestion {
  number: number;
  marks: number;
  subquestions: EssaySubQuestion[];
}

export interface EssayExamData {
  examTitle: string;
  totalMarks: number;
  caseStudy?: {
    title: string;
    content: string;
  };
  questions: EssayQuestion[];
}

export const databaseDesignExam: EssayExamData = {
  examTitle: "Database Design and Management",
  totalMarks: 100,
  caseStudy: {
    title: "EduConnect Case Study",
    content: "EduConnect is a comprehensive educational management system designed to serve students, lecturers, and administrative staff at universities. The system manages course enrollments, academic records, resource allocation, and communication between different stakeholders. Students can register for courses, view grades, access learning materials, and communicate with lecturers. Lecturers can manage course content, grade assignments, track student progress, and generate reports. Administrative staff can manage student records, course schedules, room allocations, and generate various institutional reports. The system must handle multiple campuses, different academic programs, and various user roles with appropriate access controls."
  },
  questions: [
    {
      number: 1,
      marks: 20,
      subquestions: [
        {
          number: "1",
          required: true,
          task: "Based on the EduConnect case study, identify and describe the main entities that would be required in the database system. For each entity, provide at least 5 relevant attributes and justify why each entity is necessary for the system.",
          marks: 20,
          information: {
            requirements: [
              "Identify at least 6 main entities",
              "Provide 5 attributes for each entity",
              "Justify the necessity of each entity",
              "Consider all stakeholders mentioned in the case study"
            ]
          }
        }
      ]
    },
    {
      number: 2,
      marks: 20,
      subquestions: [
        {
          number: "2",
          required: true,
          task: "Design an Entity Relationship Diagram (ERD) for the EduConnect system. Your ERD should include all entities identified in Question 1, show the relationships between entities, specify cardinalities, and indicate primary and foreign keys. Explain your design choices and any assumptions made.",
          marks: 20,
          information: {
            requirements: [
              "Include all entities from Question 1",
              "Show relationships with proper cardinalities",
              "Indicate primary keys (underlined) and foreign keys",
              "Use proper ERD notation",
              "Provide explanations for design choices"
            ]
          }
        }
      ]
    },
    {
      number: 3,
      marks: 20,
      subquestions: [
        {
          number: "3",
          required: true,
          task: "Normalize the EduConnect database design to Third Normal Form (3NF). Start with an unnormalized table that includes student enrollment information, course details, lecturer information, and grades. Show each step of normalization (1NF, 2NF, 3NF) and explain what functional dependencies are being addressed at each step.",
          marks: 20,
          information: {
            requirements: [
              "Start with a comprehensive unnormalized table",
              "Show progression through 1NF, 2NF, and 3NF",
              "Identify and explain functional dependencies",
              "Justify each normalization step",
              "Ensure no data redundancy in final design"
            ]
          }
        }
      ]
    },
    {
      number: 4,
      marks: 20,
      subquestions: [
        {
          number: "4",
          required: true,
          task: "Write SQL statements to create the database tables for the EduConnect system based on your normalized design from Question 3. Include appropriate data types, constraints (primary keys, foreign keys, check constraints), and indexes. Also write 5 complex SQL queries that would be useful for the EduConnect system, including at least one query with joins, one with aggregation, and one with subqueries.",
          marks: 20,
          information: {
            requirements: [
              "CREATE TABLE statements with proper data types",
              "All necessary constraints (PK, FK, CHECK, NOT NULL)",
              "Appropriate indexes for performance",
              "5 complex SQL queries including joins, aggregation, and subqueries",
              "Comments explaining the purpose of each query"
            ]
          }
        }
      ]
    },
    {
      number: 5,
      marks: 20,
      subquestions: [
        {
          number: "5",
          required: true,
          task: "Discuss the database administration and security considerations for the EduConnect system. Address user management, access control, backup and recovery strategies, performance optimization techniques, and data privacy compliance (such as POPIA). Provide specific recommendations for implementing these security measures in the context of the educational institution.",
          marks: 20,
          information: {
            requirements: [
              "User roles and access control strategies",
              "Backup and recovery procedures",
              "Performance optimization techniques",
              "Data privacy and POPIA compliance",
              "Security measures specific to educational institutions",
              "Recommendations for implementation"
            ]
          }
        }
      ]
    }
  ]
};
