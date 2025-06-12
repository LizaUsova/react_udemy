import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses.js";
import { useEffect } from "react";


const SingleCourse = () => {
    const params = useParams()
    const navigate = useNavigate()

    const course = courses.find((course) => course.slug === params.courseSlug)

    useEffect(() => {
        if(!course) {
            return navigate('..' , { relative: 'path' })
        }
    }, [course, navigate]);

    return (
            <div className="d-flex flex-column align-items-start col-4">
                <h2 className="text-warning">{course?.title}</h2>
                <h4 className="text-white">{course?.slug}</h4>
                <h4 className="text-white">{course?.id}</h4>
                <Link to=".." relative="path">All courses</Link>
            </div>
    );
};


export default SingleCourse;