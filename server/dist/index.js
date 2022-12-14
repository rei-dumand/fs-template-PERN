var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import setupServer from "./server";
import 'dotenv/config';
const PORT = process.env.PORT || 3000;
let server = setupServer();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error(`server failed to start: ${err}`);
    }
}))();
