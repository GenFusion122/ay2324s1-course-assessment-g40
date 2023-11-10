module.exports = mongoose => {
  QuestionSchema = mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
      unique: true
    },
    questionTitle: {
      type: String,
      required: true,
      unique: true
    },
    questionDescription: {
      type: String,
      required: true
    },
    questionCategory: {
      type: Array,
      required: true
    },
    questionComplexity: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
QuestionSchema.index({
  questionId: "text",
  questionTitle: "text",
  questionDescription: "text",
  questionComplexity: "text",
  questionCategory: "text",
})
const Question = mongoose.model(
  "question",
  QuestionSchema
);

return Question;
};