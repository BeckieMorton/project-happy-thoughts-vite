import { useState, useEffect } from 'react';

export const PostMessage = () => {


    const [newPost, setNewPost] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (newPost.length >= 141) {
            setErrorMessage("Your message is too long");
        } else {
            setErrorMessage("");
        }
    }, [newPost]);

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        console.log("newPost onformsubmit:", newPost);

        if (newPost.length <= 4) {
            setErrorMessage("Your message is too short, it needs to be at least 5 characters");
        } else {
            const options = {
                method: "POST",
                body: JSON.stringify({
                    message: `${newPost}`,
                }),
                headers: { "Content-Type": "application/json" },
            };

            await fetch(
                "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
                options
            )
                .then((response) => response.json())
                .then((data) => {
                    newMessage(data);
                    setNewPost("");
                    fetchPosts();
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div>
            <p>PostMessage</p>
            <form onSubmit={handleFormSubmit}>
                <textarea
                    rows="5"
                    cols="50"
                    placeholder="`What makes you happy right now?`"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <div>
                    <p className="error">{errorMessage}</p>
                    <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
                        {newPost.length}/140
                    </p>
                </div>
                <button type="submit" id="submitPostBtn">
                    Post Message
                </button>
            </form>
        </div>
    )
}
