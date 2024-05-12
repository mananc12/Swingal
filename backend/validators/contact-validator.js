const { z } = require("zod");

const zodContactFormSchema = z.object({
  name: z
    .string("Please enter valid user name")
    .trim()
    .min(3, "Name must be atleast 3 characters long"),
  email: z
    .string("Please enter a valid email")
    .trim()
    .min(4, "Email must be atleast 4 characters long"),
  message: z.string("Please fill properly").trim().min(1, "Can't be vacant"),
});

module.exports = zodContactFormSchema;
