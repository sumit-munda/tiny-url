import { Router } from "express";
import {
	deleteTinyUrl,
	getTinyUrlDoc,
	getTinyUrls,
	postTinyUrl,
	patchTinyUrl,
	redirectToTinyUrl,
} from "../controllers/tinyurlController.js";

const router = Router();

// '/' root endpoint with get/post methods

// get route to fetch all tinyurls
router.get("/", getTinyUrls);

// get route to fetch specific tinyurl
router.get("/:tinyurl", getTinyUrlDoc);

// post route to create a tinyurl
router.post("/", postTinyUrl);

// get route to redirect the tinyurl
router.get("/redirect/:tinyurl", redirectToTinyUrl);

// patch route to update the tinyurl
router.patch("/update/:tinyurl", patchTinyUrl);

// del route to delete a tinyurl
router.delete("/delete/:tinyurl", deleteTinyUrl);

export default router;
