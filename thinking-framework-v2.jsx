import { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import LayerNav from "./components/LayerNav";
import LayerSection from "./components/LayerSection";
import RelationshipOverview from "./components/RelationshipOverview";
import Modal from "./components/Modal";
import NetworkGraph from "./components/NetworkGraph";

export default function ThinkingFramework() {
  const [modal, setModal] = useState(null);
  const [modalTab, setModalTab] = useState("what");
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => {
    if (modal) {
      requestAnimationFrame(() => setAnimIn(true));
    } else {
      setAnimIn(false);
    }
  }, [modal]);

  const closeModal = () => { setAnimIn(false); setTimeout(() => setModal(null), 200); };
  const openModal = (item, tab = "what") => { setModal(item); setModalTab(tab); };

  return (
    <div style={{ fontFamily: "'Inter', 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif", background: "#f8f9fa", minHeight: "100vh", color: "#111827" }}>
      <GlobalStyles />
      <Header />

      {/* Relationship Overview — top */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 28px 0" }}>
        <RelationshipOverview />
      </div>

      {/* Interactive Network Section */}
      <div id="explore" style={{ background: "#f8f9fa" }}>
        <NetworkGraph onOpenModal={openModal} />
      </div>

      {/* Cards Section */}
      <LayerNav selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 28px 60px" }}>
        <LayerSection selectedLayer={selectedLayer} onOpenModal={openModal} />
      </div>

      <Modal
        modal={modal}
        modalTab={modalTab}
        setModalTab={setModalTab}
        animIn={animIn}
        closeModal={closeModal}
        setModal={setModal}
      />
    </div>
  );
}
