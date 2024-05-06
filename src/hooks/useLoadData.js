import { useState, useEffect } from 'react';
import useHttp from './http-hook';

const useLoadData = () => {
    const [data, setData] = useState();
    const { sendRequest, isLoading } = useHttp();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/blogs`
                })

                const eventRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/events`
                })
                const guideRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/guides`
                })
                const faqRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/faq`
                });

                const companyRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/profile/company`
                });
                const enablerRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/profile/enabler`
                });

                const mentorRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/profile/mentor`
                });

                const metricRes = await sendRequest({
                    url: `${import.meta.env.VITE_BACKEND_DOMAIN}/public/metrics`
                });

                setData({
                    blogs: blogRes,
                    events: eventRes,
                    guides: guideRes,
                    faq: faqRes,
                    companies: companyRes,
                    enablers: enablerRes,
                    mentors: mentorRes,
                    metrics: metricRes
                })

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    return { data, isLoading }
}

export default useLoadData