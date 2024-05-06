export const fetchImage = async (filePath) => {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/images?filePath=${filePath}`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    const pic = await res.blob()

    return pic
}