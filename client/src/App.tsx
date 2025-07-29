import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/custom-cursor";
import { MusicProvider } from "@/contexts/music-context";
import VibeSelector from "@/components/vibe-selector";
import MusicPlayer from "@/components/music-player";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import CaseStudyLLM from "@/pages/case-study-llm";
import CaseStudyVR from "@/pages/case-study-vr";
import CaseStudyIoT from "@/pages/case-study-iot";
import AdminMessages from "@/pages/admin-messages";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study/llm" component={CaseStudyLLM} />
      <Route path="/case-study-llm" component={CaseStudyLLM} />
      <Route path="/case-study/vr" component={CaseStudyVR} />
      <Route path="/case-study-vr" component={CaseStudyVR} />
      <Route path="/case-study/iot" component={CaseStudyIoT} />
      <Route path="/case-study-iot" component={CaseStudyIoT} />
      <Route path="/admin-messages" component={AdminMessages} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MusicProvider>
          <CustomCursor />
          <Toaster />
          <VibeSelector />
          <MusicPlayer />
          <Router />
        </MusicProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
