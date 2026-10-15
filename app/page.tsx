import Intro from "@/components/Intro";
import SelectedWork from "@/components/SelectedWork";
import Knowme from "@/components/Knowme";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Intro></Intro>
        <SelectedWork></SelectedWork>
        <Knowme></Knowme>
        <WorkTogether></WorkTogether>
      </main>
    </div>
  );
}
