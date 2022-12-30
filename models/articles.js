import mongoose from "mongoose";
const { Schema } = mongoose;

const ArticlesSchema = Schema({
  title: String,
  desc: String,
  img: String,
  href: String,
  body: String,
  category: String,
  tags: [String],
});

export default mongoose.model("Articles", ArticlesSchema);
