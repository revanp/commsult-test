import Image from "next/image";
import Header from './header';

export default function Home() {
	return (
		<div id="wrapper" className="clearfix" style={{ opacity: 1, animationDuration: "1500ms" }}>
			<Header></Header>
			<section className="content" style={{ marginBottom: "0px" }}>
				<div className="content-wrap">
					<div className="cs-page-title-1 cs-section" style={{ marginTop: "60px", marginBottom: "0px" }}>
						<div className="container clearfix">
							<div className="row cs-row-title" style={{ marginBottom: "0px" }}>
								<div className="cs-col-txt col-md-7">
									<div className="cs-text-wrapper">
										<h1>Wie finde ich die <u>besten mobilen</u> <u>Geräte</u> für meine Mitarbeiter?
										</h1>
									</div>
								</div>
								<div className="cs-col-img offset-sm-4 col-sm-8">
									<img src="./A.1.3_01_M1_Intro@2x.jpg" alt="" className="cs-img" />
								</div>
							</div>

							{/* <div className="row cs-row-title" style={{ marginBottom: "0px" }}>
								<div className="cs-col-txt col-md-7">
									<div className="cs-text-wrapper">
										<h1>
											How do I find the best mobile devices for my employees?
										</h1>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
