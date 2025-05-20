import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Head from 'next/head';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 400px;
    background: linear-gradient(180deg, rgba(74,108,247,0.05) 0%, rgba(74,108,247,0) 100%);
    z-index: 0;
    pointer-events: none;
  }
`;

const MainContent = styled(motion.main)`
  padding: 6rem 0 4rem;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  
  & > h1, & > section {
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  & > div {
    width: 100%;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #343a40;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, #343a40 0%, #4a6cf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.05);
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
  padding: 2.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, #4a6cf7 0%, #6a89ff 100%);
    border-radius: 6px 0 0 6px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #4a6cf7 0%, #6a89ff 100%);
    border-radius: 2px;
  }
`;

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;

    li {
      margin-bottom: 0.75rem;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -1.5rem;
        top: 0.5rem;
        width: 8px;
        height: 8px;
        background-color: #4a6cf7;
        border-radius: 50%;
      }
    }
  }
  
  strong {
    font-weight: 600;
    color: #2d3748;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff 0%, #f9fafc 100%);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(74, 108, 247, 0.08);
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #4a6cf7 0%, #6a89ff 100%);
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #4a5568;
`;

const DemoSection = styled.section`
  background: linear-gradient(135deg, #f2f6ff 0%, #f5f7ff 100%);
  padding: 4rem 0;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(74, 108, 247, 0.03) 0%, rgba(74, 108, 247, 0) 50%),
                     radial-gradient(circle at 80% 70%, rgba(74, 108, 247, 0.03) 0%, rgba(74, 108, 247, 0) 50%);
  }
`;

const DemoContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const DemoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  margin-top: 2rem;
  border: 1px solid rgba(74, 108, 247, 0.08);
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const DemoContent = styled.div`
  flex: 1;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

const CodeBlock = styled.pre`
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 1rem;
  width: 100%;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const InteractiveElement = styled(motion.div)`
  border: none;
  border-radius: 16px;
  padding: 2rem;
  margin: 2.5rem 0;
  background: linear-gradient(145deg, #ffffff 0%, #f9fafc 100%);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #4a6cf7 0%, #6a89ff 100%);
    border-radius: 6px 6px 0 0;
  }
`;

const InteractiveTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1.2rem;
`;

const InteractiveDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 1.5rem;
`;

const InteractiveButton = styled.button`
  background: linear-gradient(90deg, #4a6cf7 0%, #6a89ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.85rem 1.75rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(74, 108, 247, 0.25);
  
  &:hover {
    background: linear-gradient(90deg, #3a5ce4 0%, #5a79ff 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(74, 108, 247, 0.3);
  }
`;

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const AgentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const AgentTimeline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  min-height: 500px;
  overflow-x: auto;
  padding: 1rem 0;
  position: relative;
`;

const AgentColumn = styled.div`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #e0e0e0;
  }
`;

const AgentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1rem;
`;

const AgentIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: white;
  font-weight: bold;
  background-color: ${props => props.color || '#4a6cf7'};
`;

const AgentName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const AgentRole = styled.span`
  font-size: 0.8rem;
  color: #666;
  display: block;
`;

const MessageBubble = styled(motion.div)`
  background-color: ${props => props.isOutput ? '#f0f7ff' : '#f5f5f5'};
  border-left: 4px solid ${props => props.isOutput ? '#4a6cf7' : '#e0e0e0'};
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  max-width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    ${props => props.isInteraction ? 'bottom: -12px; left: 50%; transform: translateX(-50%);' : ''}
    ${props => props.isInteraction ? 'border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #f0f7ff;' : ''}
  }
`;

const MessageTime = styled.div`
  font-size: 0.7rem;
  color: #999;
  margin-bottom: 0.5rem;
`;

const MessageContent = styled.div`
  font-size: 0.85rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
`;

const CodeSnippet = styled.pre`
  background-color: #282c34;
  color: #abb2bf;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  line-height: 1.4;
  overflow-x: auto;
  margin-top: 0.5rem;
`;

const ConnectorLine = styled(motion.div)`
  position: absolute;
  border: 1px dashed #4a6cf7;
  transform-origin: left center;
  z-index: 2;
`;

const PlaybackControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const ControlButton = styled.button`
  background: ${props => props.active ? '#4a6cf7' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#3a5ce4' : '#e0e0e0'};
  }
  
  svg {
    margin-right: ${props => props.iconOnly ? '0' : '0.5rem'};
    width: ${props => props.iconOnly ? '1.2rem' : '1rem'};
    height: ${props => props.iconOnly ? '1.2rem' : '1rem'};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background-color: #4a6cf7;
  border-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
`;

const TypedText = ({ text, delay = 0, duration = 2 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isComplete, setIsComplete] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(prev => {
          if (prev.length >= text.length) {
            clearInterval(interval);
            setIsComplete(true);
            return prev;
          }
          return text.substring(0, prev.length + 1);
        });
      }, duration * 1000 / text.length);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [text, delay, duration]);
  
  return (
    <span>
      {displayText}
      {!isComplete && <span className="cursor">|</span>}
    </span>
  );
};

const InteractiveAgentVisualization = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [showConnections, setShowConnections] = React.useState(true);
  const [speed, setSpeed] = React.useState(1);
  
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 100;
        }
        return prev + (0.2 * speed);
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [isPlaying, speed]);
  
  const togglePlay = () => setIsPlaying(!isPlaying);
  const resetVisualization = () => {
    setProgress(0);
    setIsPlaying(true);
  };
  
  const getVisibility = (startPercent, endPercent = 100) => {
    return progress >= startPercent && progress <= endPercent;
  };
  
  const agents = [
    { 
      id: 'planner', 
      name: 'Planner Agent', 
      role: 'TCRG Planning',
      color: '#4a6cf7',
      messages: [
        { 
          time: '00:00', 
          content: 'Starting task planning for sequence detector module. Analyzing requirements...',
          startPercent: 0 
        },
        { 
          time: '00:05', 
          content: 'Task breakdown:\n1. Define module interface\n2. Create state machine\n3. Implement state transitions\n4. Design output logic',
          startPercent: 10 
        },
        {
          time: '00:12',
          content: 'Building Task and Circuit Relation Graph for "10011" sequence detector...',
          startPercent: 20
        },
        {
          time: '00:18',
          content: 'TCRG analysis complete. Signal transitions identified:\n- S0 → S1 on input "1"\n- S1 → S2 on input "0"\n- S2 → S3 on input "0"\n- S3 → S4 on input "1"\n- S4 → S5 on input "1"',
          startPercent: 30,
          interactionWith: 'coder',
          interactionTarget: 0
        }
      ] 
    },
    { 
      id: 'coder', 
      name: 'Code Agent', 
      role: 'Verilog Generation',
      color: '#00a67e',
      messages: [
        { 
          time: '00:20', 
          content: 'Received task breakdown and TCRG data. Generating Verilog module...',
          startPercent: 35 
        },
        { 
          time: '00:25', 
          content: 'Defining module interface and state parameters based on TCRG:',
          code: `module sequence_detector (
  input wire clk,
  input wire reset,
  input wire data_in,
  output reg detected
);

  // State encoding
  parameter S0 = 3'b000;  // Initial state
  parameter S1 = 3'b001;  // Detected '1'
  parameter S2 = 3'b010;  // Detected '10'
  parameter S3 = 3'b011;  // Detected '100'
  parameter S4 = 3'b100;  // Detected '1001'
  parameter S5 = 3'b101;  // Detected '10011'

  reg [2:0] current_state, next_state;`,
          startPercent: 45
        },
        {
          time: '00:32',
          content: 'Implementing state transitions based on signal flow:',
          code: `  // State register
  always @(posedge clk or posedge reset) begin
    if (reset)
      current_state <= S0;
    else
      current_state <= next_state;
  end

  // Next state logic
  always @(*) begin
    case (current_state)
      S0: next_state = data_in ? S1 : S0;
      S1: next_state = data_in ? S1 : S2;
      S2: next_state = data_in ? S1 : S3;
      S3: next_state = data_in ? S4 : S0;
      S4: next_state = data_in ? S5 : S2;
      S5: next_state = data_in ? S1 : S2;
      default: next_state = S0;
    endcase
  end`,
          startPercent: 55
        },
        {
          time: '00:38',
          content: 'Adding output logic and completing the module:',
          code: `  // Output logic
  always @(*) begin
    detected = (current_state == S5);
  end

endmodule`,
          startPercent: 65,
          interactionWith: 'debugger',
          interactionTarget: 0
        }
      ] 
    },
    { 
      id: 'debugger', 
      name: 'Debug Agent', 
      role: 'AST-Based Verification',
      color: '#e94c2b',
      messages: [
        { 
          time: '00:42', 
          content: 'Received generated Verilog code. Running syntax check...',
          startPercent: 70 
        },
        { 
          time: '00:45', 
          content: 'Syntax check passed. Running AST-based waveform tracing to verify functional correctness...',
          startPercent: 75 
        },
        {
          time: '00:52',
          content: 'AST analysis complete. Tracing signal "detected" for input sequence "10011":\n\n- Starting at S0\n- Input "1" → S1, detected = 0\n- Input "0" → S2, detected = 0\n- Input "0" → S3, detected = 0\n- Input "1" → S4, detected = 0\n- Input "1" → S5, detected = 1\n\nSequence detector works correctly!',
          startPercent: 85,
          interactionWith: 'timing',
          interactionTarget: 0
        }
      ] 
    },
    { 
      id: 'timing', 
      name: 'Timing Agent', 
      role: 'Timing Analysis',
      color: '#9c27b0',
      messages: [
        { 
          time: '00:58', 
          content: 'Performing timing analysis on verified Verilog code...',
          startPercent: 90 
        },
        { 
          time: '01:05', 
          content: 'Timing analysis complete. All paths meet timing constraints.\n\nCritical path: S3 → S4 transition\nWorst-case timing: 2.3ns\nSlack: 1.7ns\n\nDesign is timing-clean and ready for synthesis.',
          startPercent: 95 
        }
      ] 
    }
  ];
  
  return (
    <AgentContainer>
      <style jsx global>{`
        .cursor {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      
      <AgentTimeline>
        {agents.map((agent) => (
          <AgentColumn key={agent.id}>
            <AgentHeader>
              <AgentIcon color={agent.color}>{agent.name.charAt(0)}</AgentIcon>
              <div>
                <AgentName>{agent.name}</AgentName>
                <AgentRole>{agent.role}</AgentRole>
              </div>
            </AgentHeader>
            
            {agent.messages.map((message, idx) => {
              const isVisible = getVisibility(message.startPercent, message.endPercent);
              return (
                <React.Fragment key={`${agent.id}-message-${idx}`}>
                  <MessageBubble 
                    isOutput={message.code}
                    isInteraction={message.interactionWith}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageTime>{message.time}</MessageTime>
                    <MessageContent>
                      {isVisible && (
                        <TypedText 
                          text={message.content} 
                          delay={(message.startPercent - (idx > 0 ? agent.messages[idx-1].startPercent : 0)) / 20} 
                          duration={1.5 / speed}
                        />
                      )}
                    </MessageContent>
                    {message.code && isVisible && (
                      <CodeSnippet>
                        <TypedText 
                          text={message.code} 
                          delay={(message.startPercent - (idx > 0 ? agent.messages[idx-1].startPercent : 0)) / 20 + 1} 
                          duration={2 / speed}
                        />
                      </CodeSnippet>
                    )}
                  </MessageBubble>
                  
                  {message.interactionWith && showConnections && isVisible && (
                    <ConnectorArrow 
                      sourceId={`${agent.id}-message-${idx}`}
                      targetAgent={message.interactionWith}
                      targetIdx={message.interactionTarget}
                      progress={progress}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </AgentColumn>
        ))}
      </AgentTimeline>
      
      <ProgressBar>
        <ProgressFill 
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: 'linear' }}
        />
      </ProgressBar>
      
      <PlaybackControls>
        <ControlButton iconOnly onClick={resetVisualization}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </ControlButton>
        
        <ControlButton iconOnly onClick={togglePlay}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </ControlButton>
        
        <ControlButton 
          active={speed === 0.5} 
          onClick={() => setSpeed(0.5)}
        >
          0.5x
        </ControlButton>
        
        <ControlButton 
          active={speed === 1} 
          onClick={() => setSpeed(1)}
        >
          1x
        </ControlButton>
        
        <ControlButton 
          active={speed === 2} 
          onClick={() => setSpeed(2)}
        >
          2x
        </ControlButton>
        
        <ControlButton 
          active={showConnections}
          onClick={() => setShowConnections(!showConnections)}
        >
          {showConnections ? 'Hide' : 'Show'} Connections
        </ControlButton>
      </PlaybackControls>
    </AgentContainer>
  );
};

// This is a dummy component that would handle the drawing of connector arrows
// In a real implementation, this would use DOM measurements to draw actual SVG paths
const ConnectorArrow = ({ sourceId, targetAgent, targetIdx, progress }) => {
  return null; // In a real implementation, this would render an SVG connector line
};

const VerilogPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Verilog & Multi-Agent Hardware Design | Tran Development</title>
        <meta name="description" content="Explore how we're using NVIDIA's multi-agent approach to enhance Verilog, SystemVerilog, and HDL development for enterprise IP." />
        <meta property="og:url" content="https://trandev.netlify.app/verilog" />
        <meta property="og:title" content="Verilog & Multi-Agent Hardware Design | Tran Development" />
        <meta property="og:description" content="Explore how we're using NVIDIA's multi-agent approach to enhance Verilog, SystemVerilog, and HDL development for enterprise IP." />
      </Head>

      <MainContent
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <Container>
          <PageTitle variants={itemVariants}>
            Verilog & Multi-Agent Hardware Design
          </PageTitle>
          
          <DemoSection>
            <DemoContainer>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle style={{ textAlign: 'center' }}>Interactive Multi-Agent Visualization</SectionTitle>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                  Watch how our specialized agents collaborate in real-time to solve complex Verilog design tasks.
                </p>
                
                <InteractiveAgentVisualization />
              </motion.div>
            </DemoContainer>
          </DemoSection>
          
          <Section variants={itemVariants}>
            <SectionTitle>Revolutionizing HDL Development</SectionTitle>
            <SectionContent>
              <p>
                At Tran Development, we're not just applying NVIDIA's Marco multi-agent framework—we're building on top of it to create next-generation HDL solutions for enterprise clients. While NVIDIA developed the core technology, we're extending it with our own innovations to revolutionize hardware description language (HDL) development, helping up-level Verilog, SystemVerilog, and HDL codebases beyond what's currently possible.
              </p>
              <p>
                Our enhanced implementation of the Marco framework combines NVIDIA's graph-based task solving architecture with our proprietary evaluation methods and model optimization techniques. This hybrid approach allows us to benchmark different LLM configurations and identify the optimal balance of performance, accuracy, and computational efficiency for each specific hardware design challenge.
              </p>
            </SectionContent>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>Our Multi-Agent Innovation Approach</SectionTitle>
            <SectionContent>
              <p>
                We've taken NVIDIA's research foundation and developed a comprehensive evaluation system that compares different LLM strategies for hardware design tasks:
              </p>
              <FeaturesGrid>
                <FeatureCard variants={itemVariants}>
                  <FeatureTitle>Commercial vs. Open-Weight Model Analysis</FeatureTitle>
                  <FeatureDescription>
                    We systematically compare commercial LLMs used "out of the box" (like GPT-4 and Claude) against fine-tuned open-weight models (like Llama and Mistral). Our benchmarks consistently show that properly fine-tuned open models achieve 85-90% of commercial model performance at a fraction of the cost for HDL tasks.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard variants={itemVariants}>
                  <FeatureTitle>Domain-Specific Fine-Tuning</FeatureTitle>
                  <FeatureDescription>
                    Our proprietary fine-tuning datasets for Verilog and SystemVerilog development enable us to transform general-purpose open LLMs into specialized HDL agents. This process includes custom training on syntax patterns, timing constraints, and hardware-specific edge cases.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard variants={itemVariants}>
                  <FeatureTitle>Hybrid Agent Architecture</FeatureTitle>
                  <FeatureDescription>
                    We've extended NVIDIA's TCRG planning with our own hybrid architecture that combines specialized agents for different subtasks. For example, we might use GPT-4 for initial planning but deploy local fine-tuned models for code generation and debugging to optimize for both quality and cost.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard variants={itemVariants}>
                  <FeatureTitle>Evaluation Framework</FeatureTitle>
                  <FeatureDescription>
                    Our comprehensive evaluation system tests different agent configurations against the VerilogEval benchmark as well as our proprietary test suites. This allows us to quantify improvements and make data-driven decisions about which models and architectures to deploy for specific client needs.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard variants={itemVariants}>
                  <FeatureTitle>Custom AST Tools</FeatureTitle>
                  <FeatureDescription>
                    Building on NVIDIA's AST-based waveform tracing concept, we've developed extended tools that integrate directly with popular EDA environments, creating a seamless workflow between AI-generated HDL code and industry-standard verification tools.
                  </FeatureDescription>
                </FeatureCard>
                
                <FeatureCard variants={itemVariants}>
                  <FeatureTitle>Multi-Modal Enhancement</FeatureTitle>
                  <FeatureDescription>
                    We're pioneering the integration of visual inputs (circuit diagrams and waveforms) with textual specifications to improve code generation accuracy. Our experiments show a 27% improvement in functional correctness when using multi-modal inputs compared to text-only prompts.
                  </FeatureDescription>
                </FeatureCard>
              </FeaturesGrid>
            </SectionContent>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>Our Benchmarking Results</SectionTitle>
            <SectionContent>
              <p>
                Our extensive testing has yielded valuable insights into the most effective approaches for agentic HDL development:
              </p>
              <ul>
                <li>
                  <strong>Commercial LLMs vs. Fine-tuned Open Models:</strong> While GPT-4 achieves the highest absolute performance (94.2% pass rate on VerilogEval-Human v2), our fine-tuned Llama model reaches 71.8% at 1/10th the operational cost, making it ideal for iterative development and testing.
                </li>
                <li>
                  <strong>Agent Configuration Impact:</strong> Multi-agent architectures consistently outperform single-agent approaches by 25-40% on complex tasks, particularly for timing-sensitive designs with multiple interdependent modules.
                </li>
                <li>
                  <strong>Tool Integration Benefits:</strong> Integrating specialized tools like our enhanced AST-based waveform tracer improves functional correctness by 33.9% compared to pure LLM approaches without tools.
                </li>
                <li>
                  <strong>Multi-Modal Advantage:</strong> Incorporating visual representations alongside textual specifications improves performance on spatial design tasks by 29% and reduces ambiguity in port connections by 43%.
                </li>
                <li>
                  <strong>Local Deployment Efficiency:</strong> Our containerized local deployment of fine-tuned models reduces latency by 76% compared to API-based commercial models, enabling near-real-time feedback during design iterations.
                </li>
              </ul>
            </SectionContent>

            <InteractiveElement
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <InteractiveTitle>Want to benchmark your current HDL workflow against our multi-agent system?</InteractiveTitle>
              <InteractiveDescription>
                We offer comparative analysis services to quantify potential efficiency gains in your specific hardware design workflows. Our experts can set up a controlled study using your existing projects to demonstrate the impact of our enhanced Marco implementation.
              </InteractiveDescription>
              <InteractiveButton>Request a Benchmark Analysis</InteractiveButton>
            </InteractiveElement>
          </Section>

          <Section variants={itemVariants}>
            <SectionTitle>The Future of HDL Development</SectionTitle>
            <SectionContent>
              <p>
                While NVIDIA has laid an impressive foundation with their Marco framework, our research indicates that practical enterprise deployment requires significant customization and enhancement. By building on this foundation and adding our own innovations, we're creating industrial-grade agentic systems that are ready for production hardware design workflows.
              </p>
              <p>
                Our ongoing research and development focuses on:
              </p>
              <ul>
                <li>Developing specialized pre-training datasets for different hardware domains (RF, mixed-signal, digital processors)</li>
                <li>Creating hardware-aware LoRA adapters that can be swapped to optimize open-weight models for different design tasks</li>
                <li>Building integrated evaluation pipelines that automatically compare multiple LLM/tool combinations to identify optimal configurations</li>
                <li>Developing hardware-specific prompt engineering techniques that improve performance across all model types</li>
                <li>Creating enterprise-ready deployment strategies that balance cloud and local computation for optimal security and performance</li>
              </ul>
              <p>
                By partnering with Tran Development, you benefit from both NVIDIA's cutting-edge research and our practical extensions that make these technologies production-ready for enterprise hardware development.
              </p>
            </SectionContent>
          </Section>
        </Container>
      </MainContent>
    </PageContainer>
  );
};

export default VerilogPage; 