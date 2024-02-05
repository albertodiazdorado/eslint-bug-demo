import { z } from "zod";

const codec = z.number().nonnegative();

const example = 0;

const validate = () => {
    return codec.parse(example);
}

console.log(validate());