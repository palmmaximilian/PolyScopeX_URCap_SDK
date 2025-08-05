const api = require('@universal-robots/contribution-api');
const {ScriptBuilder} = require('@universal-robots/contribution-api');

const behaviors = {
  factory: createSmartSkillInstance,
  startExecution: startSmartSkillExecution,
  stopExecution: stopSmartSkillExecution,
};

// factory is required
async function createSmartSkillInstance() {
  return {
    type: 'botsandbits-scanpilot-scanpilot',
    name: 'Scanpilot',
    parameters: {},
  };
}

// startExecution is required
async function startSmartSkillExecution(instance) {
  console.log('Starting ScanPilot Smart Skill execution');
  return new ScriptBuilder();
}

// stopExecution is optional
async function stopSmartSkillExecution(instance) {
  return new ScriptBuilder();
}

api.registerSmartSkillBehavior(behaviors);
