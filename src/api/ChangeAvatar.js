import { host } from "./HostConst";

export const uploadPhoto = async (file, onPhotoUpdate, authToken) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
            `${host}/api/main/upload-user-photo`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error("Failed to upload photo");
        }

        const result = await response.text();
        console.log("Photo uploaded successfully:", result);

        // Если есть callback для обновления фото в родительском компоненте
        if (onPhotoUpdate) {
            onPhotoUpdate(result);
        }
    } catch (error) {
        console.error("Error uploading photo:", error);
    }
};
