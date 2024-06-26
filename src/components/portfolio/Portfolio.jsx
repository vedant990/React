import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  // Extract all unique tags from PortfolioData
  const allTags = PortfolioData.reduce((tags, item) => {
    if (item.tags) {
      item.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, []);

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>AWS</Tab>
            <Tab>TERRAFORM</Tab>
            <Tab>AZURE</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => (
                  <div
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-delay={item.delayAnimation}
                    className="tab-content"
                    onClick={() => handleModal(item.id)}
                  >
                    <img src={item.image} alt="portfolio project demo" />
                    <h3><span className="content-title">{item.type}</span></h3>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* Filter by AWS */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter(item => item.tags && item.tags.includes("AWS")).map(item => (
                  <div
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-delay={item.delayAnimation}
                    className="tab-content"
                    onClick={() => handleModal(item.id)}
                  >
                    <img src={item.image} alt="portfolio project demo" />
                    <h3><span className="content-title">{item.type}</span></h3>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* Filter by TERRAFORM */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter(item => item.tags && item.tags.includes("TERRAFORM")).map(item => (
                  <div
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-delay={item.delayAnimation}
                    className="tab-content"
                    onClick={() => handleModal(item.id)}
                  >
                    <img src={item.image} alt="portfolio project demo" />
                    <h3><span className="content-title">{item.type}</span></h3>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* Filter by AZURE */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter(item => item.tags && item.tags.includes("AZURE")).map(item => (
                  <div
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-delay={item.delayAnimation}
                    className="tab-content"
                    onClick={() => handleModal(item.id)}
                  >
                    <img src={item.image} alt="portfolio project demo" />
                    <h3><span className="content-title">{item.type}</span></h3>
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};

export default Portfolio;
