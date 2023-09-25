import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Service() {
  return (
    <div className='Service' id='Service'>
      <Container>
        <Col>
            <Row>
                <h2 className='Headline'>Berangkat Haji atau Umroh Tidak Harus Sulit, <br/>
                    Indana Tour and Travel Hadir Untuk Anda
                </h2>
            </Row>
            <Row>
                <h5 className='Text-Headline'>Bingung Memilih Travel ?</h5>
                <p className='Text'>Indana Tour And Travel Hadir untuk anda, Tidak hanya harga <br/>
                    yang terjangkau tetapi Indana Tour And Travel juga sudah banyak <br/>
                    di percaya konsumen
                </p>
            </Row>
            <Row>
                <h5 className='Text-Headline'>Paket Umroh Atau Haji Terlalu Mahal ?</h5>
                <p className='Text'>Indana Tour And Travel Menyediakan Berbagai macam paket Umroh dan<br/>
                    Haji yang terjangkau
                </p>
            </Row>
            <Row>
                <h5 className='Text-Headline'> Kendala Keuangan ?</h5>
                <p className='Text'>Indana Tour And Travel Menyediakan Cicilan perbulan agar memudahkan<br/>
                    Calon Haji dan Umroh yang ingin ke tanah suci
                </p>
            </Row>

        </Col>
      </Container>
    </div>
  )
}

export default Service;
