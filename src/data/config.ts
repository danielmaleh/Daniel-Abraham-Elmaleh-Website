export const SITE_NAME = "Daniel Abraham Elmaleh";
export const GA_MEASUREMENT_ID = "G-V4DC3V3MYP";

const defaultResumeUrl = "/CV/resume.pdf";
export const RESUME_URL = typeof import.meta !== "undefined" && import.meta.env?.VITE_RESUME_URL
    ? import.meta.env.VITE_RESUME_URL
    : defaultResumeUrl;
