class Rule {
    constructor(eatingHabits, sleepingHabits) {
        this.eatingHabits = eatingHabits;
        this.sleepingHabits = sleepingHabits;
    }
}

const familyRules = {
    default: new Rule(
        { lunchAt: "13:00", dinnerAt: "21:00" },
        { keepAcOn: "NO", lightsOffAt: "22:00" }
    ),
    ancestor: new Rule(
        { lunchAt: "11:00", dinnerAt: null },
        { keepAcOn: null, lightsOffAt: "21:00" }
    ),
    grandparent: new Rule(
        { lunchAt: null, dinnerAt: "20:00" },
        { keepAcOn: "YES", lightsOffAt: null }
    ),
    parent: new Rule(
        { lunchAt: "01:00", dinnerAt: null },
        { keepAcOn: null, lightsOffAt: "21:30" }
    ),
    child: new Rule(
        { lunchAt: null, dinnerAt: null },
        { keepAcOn: null, lightsOffAt: null }
    )
};

function createRuleForMember(memberType, rule) {
    familyRules[memberType] = rule;
    populateTable('updatedTable', getAllCurrentRules());
}

function getRuleForMember(memberType) {
    const hierarchy = ['default', 'ancestor', 'grandparent', 'parent', 'child'];
    const index = hierarchy.indexOf(memberType);

    const aggregatedRule = {
        eatingHabits: { lunchAt: null, dinnerAt: null },
        sleepingHabits: { keepAcOn: null, lightsOffAt: null }
    };

    for (let i = 0; i <= index; i++) {
        const type = hierarchy[i];
        const rule = familyRules[type];

        if (rule.eatingHabits.lunchAt) {
            aggregatedRule.eatingHabits.lunchAt = rule.eatingHabits.lunchAt;
        }
        if (rule.eatingHabits.dinnerAt) {
            aggregatedRule.eatingHabits.dinnerAt = rule.eatingHabits.dinnerAt;
        }
        if (rule.sleepingHabits.keepAcOn) {
            aggregatedRule.sleepingHabits.keepAcOn = rule.sleepingHabits.keepAcOn;
        }
        if (rule.sleepingHabits.lightsOffAt) {
            aggregatedRule.sleepingHabits.lightsOffAt = rule.sleepingHabits.lightsOffAt;
        }
    }

    return aggregatedRule;
}

const ancestor = { name: 'Parveen', type: 'ancestor' };
const grandparent = { name: 'Usha', type: 'grandparent' };
const parent = { name: 'Shubham', type: 'parent' };
const child = { name: 'Sahil', type: 'child' };

const members = [ancestor, grandparent, parent, child];

function populateTable(tableId, rules) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows

    Object.keys(rules).forEach(memberType => {
        const rule = rules[memberType];
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = memberType;
        row.insertCell(1).innerText = rule.eatingHabits.lunchAt || 'N/A';
        row.insertCell(2).innerText = rule.eatingHabits.dinnerAt || 'N/A';
        row.insertCell(3).innerText = rule.sleepingHabits.keepAcOn || 'N/A';
        row.insertCell(4).innerText = rule.sleepingHabits.lightsOffAt || 'N/A';
    });
}

function getDefaultRules() {
    return familyRules;
}

function getAllCurrentRules() {
    const allRules = {};
    members.forEach(member => {
        allRules[member.type] = getRuleForMember(member.type);
    });
    return allRules;
}

function updateRule() {
    const memberType = document.getElementById('memberType').value;
    const lunchAt = document.getElementById('lunchAt').value || null;
    const dinnerAt = document.getElementById('dinnerAt').value || null;
    const keepAcOn = document.getElementById('keepAcOn').value || null;
    const lightsOffAt = document.getElementById('lightsOffAt').value || null;

    const newRule = new Rule(
        { lunchAt: lunchAt, dinnerAt: dinnerAt },
        { keepAcOn: keepAcOn, lightsOffAt: lightsOffAt }
    );

    createRuleForMember(memberType, newRule);
}
populateTable('defaultTable', getDefaultRules());
populateTable('updatedTable', getAllCurrentRules());
