import React, { useEffect, useContext, useRef, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import infoimg from "../assets/image/info.svg";
import slide_img1 from "../assets/image/slide_img.png";
import red_caret_up from "../assets/image/red_caret_up.png";
import Chartone from "../pages/ChartOne.js";
import ChartTwo from "../pages/ChartTwo.js";
import * as Loader from "react-loader-spinner";
import { Web3Context } from '../web3/contexts/web3Context'
import { poolMethods } from '../web3/functions/factory'
import axios from 'axios';
import moment from 'moment';
import { getAllTrack, addTrack } from '../action/api'
import { toast } from "react-toastify";

const DashboardPage = () => {
  const { networkDetails, handleConnect, loading, setLoading } = useContext(Web3Context)
  const [state, setState] = useState({})
  const [priceTarget, setPriceTarget] = useState(0)
  const [oracleRate, setOracleRate] = useState(0)
  const [floorPrice, setFloorPrice] = useState()
  const [getAllTrackData, setGetAllTrackData] = useState()
  const [getImages, setGetImages] = useState()
  const [timerDays, setTimerDays] = useState("00")
  const [timerHours, setTimerHours] = useState("00")
  const [timerMinutes, setTimerMinutes] = useState("00")
  const [timerSeconds, setTimerSeconds] = useState("00")
  let interval = useRef();
  const startTimer = () => {
    const getDate = new Date().getTime()
    // const currentDate = moment(getDate).format('MMM DD, yyy')
    const countdownDate = new Date(`${moment(getDate).format('MMM DD, yyy')} 24:00:00`).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        //stop timer
        clearInterval(interval.current)
      } else {
        //update timer
        setTimerDays(days)
        setTimerHours(hours < 10 ? `0${hours}` : hours)
        setTimerMinutes(minutes < 10 ? `0${minutes}` : minutes)
        setTimerSeconds(seconds < 10 ? `0${seconds}` : seconds)
      }
    }, 1000);
  }
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  const image = [
    "https://lh3.googleusercontent.com/4CHJYi3NyJ1GWaRPz-TKpUo0A6O2pHHODDa4E8nd-oM8mO25UaD_ZECR_JHDLMDzZgmTGRqKqSRPiCYhCDSUvrV7UJmPpEJKzC-mtg=w286",
    "https://lh3.googleusercontent.com/O0TPreCr-fnuhYTUGwHPfp3gZgqwAogRrdmkm60Aiozg9kTuyMeIKc_A0I_yBNIJfoISRuGllSHsatOjxxMWHMMxMOhMbpOJ43wM8A=w286",
    "https://lh3.googleusercontent.com/VcINO7tS_jlFUDPoEAAAcU9scOLfTNKWHB8u2U30BwZMFFS5eUfQeeaDTz_qKAQ1mt6jjUOFg-1bdSprvk53zGpGsstwwLORQur9Zg=w286",
    "https://lh3.googleusercontent.com/I7yxsg5cBindbstIuEctPiPLgK3QxAmWIU2Uqe5xAK3dAnl5L4TipPygOf5ynpr_7AkxKDPdxD1OaoeTSjdyzH7OYPgQqNHkyWS7xWY=w600",
    "https://lh3.googleusercontent.com/bY7Shp-jwm7gzfOAD684dD6Qk87utF5m5AHHxSmg0j1Zzx3VOH2wazftdA4Q30LrU7ESRid79O4Wi6VcjRas3mnOh4HuhxYHqQA_7Z8=w286",
    "https://lh3.googleusercontent.com/CihDNOBwzoCK__mgJgFFyRazaOm-5WGvxp4YdTLLyUiq86seRPPfUN7aZOCArpGvG2RLpBjpy0b8RukVIWD4a0GkLLxJ_6xAPKydZ2I=w286",
    "https://lh3.googleusercontent.com/2ZfTLFDnlFS-SbVf_h5fV2Dwnx8FTt_EJZajLlY8K08uZXMMkwjMohq5fAfhRoylrk68kaNkCNOhbfQY-FYJbrDqdc6XfetMiwVS=w286",
    "https://lh3.googleusercontent.com/pjja9yQOgIzrAfFPwgXi-KfQTz-Kxw-jZkDGoA0XGfYJc1325nQ9vc5xi1-eyFtM0lIETWInSGagyOAXsw2DqAIK1IE15jWeE_2U=w286",
    "https://lh3.googleusercontent.com/SLewJKxPmXfpFEdGBmlH_BMN3MdI5BBPi3xvr0TAKhGRx4f09msqKYzT1U1tZbAU8aSQVmjjfuWMktfHITHRcu5tiBBI7V5FEc15wQ=w286",
    "https://lh3.googleusercontent.com/AJ_40kO009xD-XE2Wyy0ANYKi9uzVYQAaybVGIWBXMA4cIKdggBWG6WHxXZTv4pdAR0OvA_i7X0hapqWixW12nvqHvclqcRpgcrtsg0=w286",
  ]

  const onRenderPrice = () => {
    const options = [
      "bayc-honorary-members",
      "cryptopunks",
      "clonex",
      "azuki",
      "0xmayc-official",
      "doodles-official",
      "cool-cats-nft",
      "veefriends",
      "world-of-women-nft",
      "cyberkongz",
    ]

    Promise.all(options.map(res => axios.get(`https://api.opensea.io/api/v1/collection/${res}/stats`))).then((result) => {
      setFloorPrice(result)
    })

    Promise.all(options.map(res => axios.get(`https://api.opensea.io/api/v1/collection/${res}`))).then((results) => {
      setGetImages(results)
    })
  }

  const connectWallet = () => {
    handleConnect()
  }
  const onRenderFirstContract = async () => {
    setLoading(true)
    const firstInstance = await poolMethods.getFirstInstance(networkDetails.web3);
    if (firstInstance) {
      try {
        const totalSupply = await poolMethods.getTotalSupply(firstInstance, networkDetails.address);
        const balanceOf = await poolMethods.getBalanceOf(firstInstance, networkDetails.address)

        setState({
          ...state,
          totalSupply: totalSupply,
          Circulating: parseFloat(parseFloat(totalSupply) - parseFloat(balanceOf)).toFixed(2),
        })
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log('error', error)
      }
    }
  }

  const onRenderSecondContract = async () => {
    setLoading(true)
    const secondInstance = await poolMethods.getSecondInstance(networkDetails.web3)
    if (secondInstance) {
      try {
        const getData = await poolMethods.getDataSecond(secondInstance, networkDetails.address)
        setPriceTarget(getData)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log('error2', error)
      }
    }
  }

  const onRenderThirdContrat = async () => {
    setLoading(true)
    const thirdInstance = await poolMethods.getThirdInstance(networkDetails.web3)
    if (thirdInstance) {
      try {
        const getData = await poolMethods.getDataThird(thirdInstance, networkDetails.address)
        setOracleRate(getData)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log('error3', error)
      }
    }
  }

  useEffect(() => {
    (async () => {
      if (networkDetails && networkDetails.connected) {
        onRenderFirstContract()
        onRenderSecondContract()
        onRenderThirdContrat()
      }
    })()
  }, [networkDetails])

  useEffect(async () => {
    const getATrack = await getAllTrack()
    if (getATrack?.data?.responseData?.length > 0) {
      setGetAllTrackData(getATrack.data.responseData)
    }
  }, [])

  useEffect(() => {
    onRenderPrice();
  }, [])

  return (
    <>
      {/* {console.log('state', state)} */}
      {loading && (
        <div className="cust_loader">
          <Loader.TailSpin
            type="Rings"
            color="#8DFF26"
            height={100}
            width={100}

          />
        </div>
      )}
      <section className="rate_target_row ">
        <Container>
          <Row>
            <Col xl={3} lg={6} className="mb-md-2">
              <div className="next_rebase d-flex flex-column justify-content-center green_shadow_bg">
                <p className="fs-18px  fw-300 opacity-50 text-white m-0">Next Rebase</p>
                <p className="fs-lg-32px m-0 fw-400 opacity-1 text-white m-0"><span>{timerHours}H : {timerMinutes}M : {timerSeconds}S</span></p>
                <button className="bg-transparent border-0 info_gren_btn"><img src={infoimg} /></button>
              </div>
            </Col>
            <Col xl={3} lg={6} className="mb-md-2">
              <div className="next_rebase d-flex flex-column justify-content-center green_shadow_bg">
                <p className="fs-18px  fw-300 opacity-50 text-white m-0">Oracle Rate</p>
                <p className="fs-lg-32px m-0 fw-400 opacity-1 text-white m-0"><span>ETH {oracleRate}</span></p>
                <button className="bg-transparent border-0 info_gren_btn"><img src={infoimg} /></button>
              </div>
            </Col>
            <Col xl={3} lg={6} className="mb-md-2">
              <div className="next_rebase d-flex flex-column justify-content-center green_shadow_bg">
                <p className="fs-18px  fw-300 opacity-50 text-white m-0">Price Target</p>
                <p className="fs-lg-32px m-0 fw-400 opacity-1 text-white m-0"><span>ETH {priceTarget}</span></p>
                <button className="bg-transparent border-0 info_gren_btn"><img src={infoimg} /></button>
              </div>
            </Col>
            <Col xl={3} lg={6} className="mb-md-2">
              <div className="next_rebase d-flex flex-column justify-content-center green_shadow_bg">
                <p className="fs-18px  fw-300 opacity-50 text-white m-0">Circulating / Total Supply</p>
                <p className="fs-lg-32px m-0 fw-400 opacity-1 text-white m-0">
                  {state?.Circulating ? state?.Circulating : 0} / {state?.totalSupply ? state?.totalSupply : 0}</p>
                <button className="bg-transparent border-0 info_gren_btn"><img src={infoimg} /></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="price_chart_main my-3">
        <Container>
          <Row>
            <Col xl={6}>
              <div className="chart_item green_shadow_bg mb-5">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="text-white fs-18px fw-400">
                    Price
                  </div>
                  <div className="days_btn">
                    <button>30Days</button>
                    <button>60Days</button>
                    <button>90Days</button>
                    <button>1 Year</button>
                    <button>All</button>
                    <button>ABS</button>
                    <button>%</button>

                  </div>
                </div>
                <Chartone getAllTrackData={getAllTrackData} />
                <div className="price_tar_row">
                  <Row>
                    <Col xl={8}>
                      <div className="d-flex">
                        <div className="price-target_box">
                          <div className="text-white">
                            --
                          </div>
                          <div>
                            <p className="strip_text_cl fs-16px fw-400">Price Target</p>
                          </div>
                        </div>
                        <div className="price-target_box">
                          <div className="text-white">
                            --
                          </div>
                          <div>
                            <p className="strip_text_cl fs-16px fw-400">Expansion Threshold</p>
                          </div>
                        </div>
                        <div className="price-target_box">
                          <div className="text-white">
                            --
                          </div>
                          <div>
                            <p className="strip_text_cl fs-16px fw-400">Contraction Threshold</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={4} className="text-end">
                      <div className="unitvolume_div d-flex justify-content-end">
                        <div>
                          <div>
                            <p className="strip_text_cl fs-14px fw-400">High 3.75</p>
                          </div>
                          <div>
                            <p className="strip_text_cl fs-14px fw-400">Low 0.15</p>
                          </div>
                        </div>

                        <div>
                          <div>
                            <p className="strip_text_cl fs-14px fw-400">Average 1.14</p>
                          </div>
                          <div>
                            <p className=" strip_text_cl fs-14px fw-400">Median 1.05</p>
                          </div>
                        </div>
                      </div>
                    </Col>

                  </Row>
                </div>
              </div>

              <div className="chart_item green_shadow_bg">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="text-white fs-18px fw-400">
                    Supply
                  </div>
                  <div className="days_btn">
                    <button>30Days</button>
                    <button>60Days</button>
                    <button>90Days</button>
                    <button>1 Year</button>
                    <button>All</button>
                    <button>ABS</button>
                    <button>%</button>


                  </div>
                </div>

                <ChartTwo getAllTrackData={getAllTrackData} />
                <div className="price_tar_row volume_data">
                  <Row>
                    <Col xl={3} lg={6}>
                      <div className="price-target_box">
                        <div>
                          <p className="strip_text_cl fs-16px fw-400 mb-2">High</p>
                        </div>
                        <div className="text-white">
                          514.68M
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={6}>
                      <div className="price-target_box">
                        <div>
                          <p className="strip_text_cl fs-16px fw-400 mb-2">Low</p>
                        </div>
                        <div className="text-white">
                          260.29M
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={6}>
                      <div className="price-target_box">
                        <div>
                          <p className="strip_text_cl fs-16px fw-400 mb-2">Median</p>
                        </div>
                        <div className="text-white">
                          365.99M
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={6}>
                      <div className="price-target_box">
                        <div>
                          <p className="strip_text_cl fs-16px fw-400 mb-2">Price Target</p>
                        </div>
                        <div className="text-white">
                          514.68M
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="Blue_chip_nft green_shadow_bg">
                <h2 className="gren_title fs-45px  fw-700 text-center pt-5">Bluechip NFTs</h2>
                <Row>
                  {floorPrice && floorPrice.length > 0 &&
                    floorPrice.map((res, i) => {
                      const Price = res.data.stats.floor_price
                      return (
                        <Col xl={6} className="mb-3" key={i + 1}>
                          <div className="bluechip_img img-border-box">
                            <div className="bluechip_inner">
                              <img src={image[i]} alt="slide_img1" className="img-fluid mb-2" />
                              <div className="fs-25px fw-400 text-white">
                                {getImages && getImages[i].data.collection.slug}
                              </div>
                              <div>
                                <button className="flor_price_btn fs-18px fw-400  mt-2">FLOOR PRICE -${Price !== null ? Price : 0}</button>
                              </div>
                            </div>
                            <div className="bluechip_oeverlap">
                              <div className="fs-45px fw-700 text-white">
                                {getImages && getImages[i].data.collection.slug}
                              </div>
                              <p className="fs-18px fw-400 text-white">FLOOR PRICE -${Price !== null ? Price : 0}</p>
                              <div className="flor_price_increse fs-32px fw-400">
                                22% <img src={red_caret_up} alt="red_caret_up" className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </Col>
                      )
                    })
                  }
                </Row>
              </div>
            </Col>
          </Row >
        </Container >
      </section >
    </>
  );
};
export default DashboardPage;
