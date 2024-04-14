export interface IeltsSkillTest {
    "id": number,
    "UserID": number,
    "test_type": number,
    "score": number,
    "feedback": string,
    "time_spent": string,
    "time_passed": string
}

export interface IeltsTest {
reading:IeltsSkillTest,
writing:IeltsSkillTest,
listening:IeltsSkillTest,
speaking:IeltsSkillTest,
}