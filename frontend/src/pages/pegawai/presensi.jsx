import React from 'react'
import Layout from '../../components/Layout'

const Presensi = () => {
    return (
        <Layout
            pageTitle='Presensi'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="Presensi"
                    className='w-full h-screen'
                    // width="600" height="373.5" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiZjIwY2RmYjgtOTY0MS00NDAwLTk3MmQtNGIyNzM5MDc1NjcwIiwidCI6ImYzMTEzNmJjLWE3OTAtNDUwZi04Y2NiLWNhZDNmYWFlNDRmNyIsImMiOjEwfQ%3D%3D" 
                    frameborder="0"
                    allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default Presensi
