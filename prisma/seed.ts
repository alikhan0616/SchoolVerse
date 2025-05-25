import { Day, PrismaClient, UserSex } from "@prisma/client";
const prisma = new PrismaClient();

async function cleanup() {
  console.log("Cleaning up existing data...");
  await prisma.$transaction([
    prisma.announcement.deleteMany(),
    prisma.event.deleteMany(),
    prisma.attendance.deleteMany(),
    prisma.result.deleteMany(),
    prisma.assignment.deleteMany(),
    prisma.exam.deleteMany(),
    prisma.student.deleteMany(),
    prisma.parent.deleteMany(),
    prisma.lesson.deleteMany(),
    prisma.teacher.deleteMany(),
    prisma.subject.deleteMany(),
    prisma.class.deleteMany(),
    prisma.grade.deleteMany(),
    prisma.admin.deleteMany(),
  ]);
  console.log("Existing data cleaned successfully");
}

async function main() {
  try {
    await cleanup();

    const createdGrades = [];
    const createdClasses = [];
    const createdSubjects = [];
    const createdParents = [];
    const createdStudents = [];

    // ADMIN
    console.log("Creating admins...");
    await prisma.admin.create({
      data: { id: "admin1", username: "admin1" },
    });
    await prisma.admin.create({
      data: { id: "admin2", username: "admin2" },
    });

    // GRADE
    console.log("Creating grades...");
    for (let i = 1; i <= 6; i++) {
      const grade = await prisma.grade.create({
        data: { level: i },
      });
      createdGrades.push(grade);
    }

    // CLASS
    console.log("Creating classes...");
    for (let i = 1; i <= 6; i++) {
      const class_ = await prisma.class.create({
        data: {
          name: `${i}A`,
          gradeId: createdGrades[i - 1].id,
          capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
        },
      });
      createdClasses.push(class_);
    }

    // SUBJECT
    console.log("Creating subjects...");
    const subjectData = [
      { name: "Mathematics" },
      { name: "Science" },
      { name: "English" },
      { name: "History" },
      { name: "Geography" },
      { name: "Physics" },
      { name: "Chemistry" },
      { name: "Biology" },
      { name: "Computer Science" },
      { name: "Art" },
    ];

    for (const subject of subjectData) {
      const created = await prisma.subject.create({ data: subject });
      createdSubjects.push(created);
    }

    // TEACHER
    console.log("Creating teachers...");
    for (let i = 1; i <= 15; i++) {
      await prisma.teacher.create({
        data: {
          id: `teacher${i}`,
          username: `teacher${i}`,
          name: `TName${i}`,
          surname: `TSurname${i}`,
          email: `teacher${i}@example.com`,
          phone: `123-456-789${i}`,
          address: `Address${i}`,
          bloodType: "A+",
          sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
          subjects: {
            connect: [
              {
                id: createdSubjects[i % createdSubjects.length].id,
              },
            ],
          },
          classes: {
            connect: [
              {
                id: createdClasses[i % createdClasses.length].id,
              },
            ],
          },
          birthday: new Date(
            new Date().setFullYear(new Date().getFullYear() - 30)
          ),
        },
      });
    }

    // LESSON
    console.log("Creating lessons...");
    for (let i = 1; i <= 30; i++) {
      await prisma.lesson.create({
        data: {
          name: `Lesson${i}`,
          day: Day[
            Object.keys(Day)[
              Math.floor(Math.random() * Object.keys(Day).length)
            ] as keyof typeof Day
          ],
          startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
          endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
          subjectId: createdSubjects[i % createdSubjects.length].id,
          classId: createdClasses[i % createdClasses.length].id,
          teacherId: `teacher${(i % 15) + 1}`,
        },
      });
    }

    // PARENT
    console.log("Creating parents...");
    for (let i = 1; i <= 25; i++) {
      const parent = await prisma.parent.create({
        data: {
          id: `parentId${i}`,
          username: `parentId${i}`,
          name: `PName ${i}`,
          surname: `PSurname ${i}`,
          email: `parent${i}@example.com`,
          phone: `123-456-789${i}`,
          address: `Address${i}`,
        },
      });
      createdParents.push(parent);
    }

    // STUDENT
    console.log("Creating students...");
    for (let i = 1; i <= 50; i++) {
      const student = await prisma.student.create({
        data: {
          id: `student${i}`,
          username: `student${i}`,
          name: `SName${i}`,
          surname: `SSurname ${i}`,
          email: `student${i}@example.com`,
          phone: `987-654-321${i}`,
          address: `Address${i}`,
          bloodType: "O-",
          sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
          parentId: createdParents[Math.floor((i - 1) / 2)].id,
          gradeId: createdGrades[i % createdGrades.length].id,
          classId: createdClasses[i % createdClasses.length].id,
          birthday: new Date(
            new Date().setFullYear(new Date().getFullYear() - 10)
          ),
        },
      });
      createdStudents.push(student);
    }

    // EXAM
    console.log("Creating exams...");
    for (let i = 1; i <= 10; i++) {
      await prisma.exam.create({
        data: {
          title: `Exam ${i}`,
          startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
          endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
          lessonId: i % 30,
        },
      });
    }

    // ASSIGNMENT
    console.log("Creating assignments...");
    for (let i = 1; i <= 10; i++) {
      await prisma.assignment.create({
        data: {
          title: `Assignment ${i}`,
          startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
          dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
          lessonId: i % 30,
        },
      });
    }

    // RESULT
    console.log("Creating results...");
    for (let i = 1; i <= 10; i++) {
      await prisma.result.create({
        data: {
          score: 90,
          studentId: createdStudents[i - 1].id,
          ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
        },
      });
    }

    // ATTENDANCE
    console.log("Creating attendance...");
    for (let i = 1; i <= 10; i++) {
      await prisma.attendance.create({
        data: {
          date: new Date(),
          present: true,
          studentId: createdStudents[i - 1].id,
          lessonId: i % 30,
        },
      });
    }

    // EVENT
    console.log("Creating events...");
    for (let i = 1; i <= 5; i++) {
      await prisma.event.create({
        data: {
          title: `Event ${i}`,
          description: `Description for Event ${i}`,
          startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
          endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
          classId: createdClasses[i % createdClasses.length].id,
        },
      });
    }

    // ANNOUNCEMENT
    console.log("Creating announcements...");
    for (let i = 1; i <= 5; i++) {
      await prisma.announcement.create({
        data: {
          title: `Announcement ${i}`,
          description: `Description for Announcement ${i}`,
          date: new Date(),
          classId: createdClasses[i % createdClasses.length].id,
        },
      });
    }

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
