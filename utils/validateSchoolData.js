export const validateSchoolData = ({ name, address, latitude, longitude }) => {
    if (!name || !address || latitude === undefined || longitude === undefined) {
        return "All fields are required.";
    }

    if (typeof name !== "string" || typeof address !== "string") {
        return "Name and address must be strings.";
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return "Latitude and longitude must be valid numbers.";
    }

    return null; 
};