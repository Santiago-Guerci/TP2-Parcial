import memoryModel from "../users.model.js";
import fsModel from "../users.fs.js";

const Factory = (type) => {
    switch (type) {
        case "MEM":
            return memoryModel;
        case "FS":
            return fsModel;
        default:
            throw new Error("Invalid model type");
    }
}

export default Factory;
