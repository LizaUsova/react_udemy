import courses from "../data/courses.js";
import queryString from 'query-string'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
    const sortedCourses = [...courses]
    if(!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }
    sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1 )
    return sortedCourses
}

const Courses = () => {
    const location = useLocation()
    const query = queryString.parse(location.search) //search это метод объекта location
    const navigate = useNavigate()
    const [sortKey, setSortKey] = useState(query.sort)
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))
    useEffect(() => {
        if(!SORT_KEYS.includes(sortKey)) {
            navigate('.')
            setSortKey(undefined)
            setSortedCourses([...courses])
        }
    }, [sortKey, navigate]);

    return (
        <div className="d-flex flex-column">
            <h1 className="text-white mb-3">{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <Link to={course.slug} className="text-decoration-none">{course.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Courses;