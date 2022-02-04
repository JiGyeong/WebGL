import React from 'react'
import reactDom from 'react-dom';
import './Portfolio.css'


class Portfolio extends React.Component {
    render() {
        return (
            <main>
                <header>
                    <h3>Front-End Developer 백지경 🚀</h3>
                    <p>📧 &nbsp; wlrud0126@gmail.com</p>
                    <p></p>
                    <p>
                        저는 Javascript 언어를 좋아하는 4년차 Front-End 개발자입니다.
                        <br />
                        KT에서 WEB용 영상통화, 드로잉, 채팅 SDK 를 개발하고 있습니다.
                        <br />
                        다양한 라이브러리를 활용해보면서 재미있는 WEB 기능을 만드는데 관심이 많습니다.
                        <br />
                        제 SDK 를 외부 개발자에게 제공하는 업무이기에 항상 사용성과 편리성을 높이고자 고민합니다.
                        <br />
                        부서내 동료들과 개발 경험 공유 또는 스터디 하는 것을 좋아하여 모임을 주도하는 편입니다.
                    </p>

                </header>
                <section>
                    <h2>📜 &nbsp;기술</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Javascript</td>
                                <td>🌕🌕🌕🌕🌑</td>
                                <td>검색을 통해 대부분의 기능 개발 및 트러블 슈팅을 할 수 있는 정도</td>
                            </tr>
                            <tr>
                                <td>Java/Spring</td>
                                <td>🌕🌕🌕🌑🌑</td>
                                <td>갖춰진 프레임웍에서 API 개발 및 트러블 슈팅을 할 수 있는 정도</td>
                            </tr>
                            <tr>
                                <td>HTML/CSS</td>
                                <td>🌕🌕🌕🌑🌑</td>
                                <td>검색을 통해 구현할 수 있는 정도</td>
                            </tr>
                            <tr>
                                <td>Linux/Apache</td>
                                <td>🌕🌕🌑🌑🌑</td>
                                <td>검색에 의존하여 세팅할 수 있는 정도</td>
                                </tr>
                            <tr>
                                <td>DB</td>
                                <td>🌕🌕🌑🌑🌑</td>
                                <td>간단한 설계 및 원하는 쿼리 작성이 가능한 정도</td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>🌕🌕🌑🌑🌑</td>
                                <td>간단한 웹 개발 및 코드 분석이 가능한 정도</td>
                            </tr>
                            <tr>
                                <td>Docker</td>
                                <td>🌕🌑🌑🌑🌑</td>
                                <td>이미지 생성 및 로그 분석이 가능한 정도</td>
                            </tr>
                        </tbody>
                    </table>

                </section>
                <section>
                    <h2>📜 &nbsp;경험</h2>
                    
                </section>
            </main>
        )
    }
}

export default Portfolio;