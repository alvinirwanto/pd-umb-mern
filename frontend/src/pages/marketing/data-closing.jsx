import React from 'react'
import Layout from '../../components/Layout'

const DataClosing = () => {
    return (
        <Layout
            pageTitle='Data Closing'
        >
            <div className='pt-[10rem]'>
                {/* <iframe
                    title="Data Closing 200123 - Dashboard"
                    // width="600" height="373.5" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiOTUzNzlmNGUtNTRhYy00MzEwLWE5OWUtM2UxY2VhZTdlMGRhIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe> */}

                <iframe
                    title="Data Closing 230223"
                    className='w-full h-screen'
                    // width="600" 
                    // height="373.5" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiNmViYzdlM2YtOGI4Mi00OWY3LThhZmItMTBlOTg3NTNmMDdlIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D"
                    frameborder="0"
                    allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default DataClosing