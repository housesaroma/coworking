export function userInfo(authToken, setData) {
    fetch("http://localhost:8070/api/main/user-info", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((userInfo) => {
            const [lastName, firstName, middleName] =
                userInfo.fullName.split(" ");
            setData({
                lastName: lastName || "",
                firstName: firstName || "",
                middleName: middleName || "",
                email: userInfo.username,
                password: "qwerty123", // Keep the password unchanged
            });
        })
        .catch((error) => console.error("Error fetching user info:", error));
}
