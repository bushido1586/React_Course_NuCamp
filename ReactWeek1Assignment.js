class Student {
    constructor(name, email, community) {
        this.name = name,
            this.email = email,
            this.community = community
    }
};

class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = [];
    };

    registerStudent(Student) {
        if (!this.students.includes(Student)) {
            this.students.push(Student);
        } else if (this.students.includes(Student)) {
            console.log("This student is already registered.")
        }
        return this.students;
    };

};