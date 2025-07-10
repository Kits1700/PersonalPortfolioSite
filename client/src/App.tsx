import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import CaseStudyLLM from "@/pages/case-study-llm";
import CaseStudyVR from "@/pages/case-study-vr";
import CaseStudyIoT from "@/pages/case-study-iot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study/llm" component={CaseStudyLLM} />
      <Route path="/case-study/vr" component={CaseStudyVR} />
      <Route path="/case-study/iot" component={CaseStudyIoT} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
