import React, {useState} from "react"
import MainLayout from "../../layout/MainLayout"
import axios from "axios"
import StraviewAPI from "../../common/StraviewAPI"

function Activities() {
    const [activityPageNumber, setActivityPageNumber] = useState(1)
    const [activityPageItemCount, setActivityPageItemCount] = useState(20)

    function getActivities() {
        let header = StraviewAPI.createRequestHeader()

        axios.get(
            StraviewAPI.createApiUrl('/api/v1/activities',
            header)
        ).then((response) => {
            if (!response.status == 200) {
                //TODO 예외처리
            }

            //TODO 데이터 바인딩
        }).catch((error) => {
            //TODO 예외처리
        })

    }

    return (
        <MainLayout>
            <section>
                액티비티 내용
            </section>
        </MainLayout>
    )
}

export default Activities