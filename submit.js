/*jshint esversion: 6 */
(() => {
    const buttonSpeaker = document.querySelector('#submit-button-speaker');
    if (buttonSpeaker) addSubmitButtonSpeakerListener();

    function addSubmitButtonSpeakerListener() {
        document.querySelector('#submit-button-speaker').onclick = () => {
            const name = document.querySelector('#speaker-name').value;
            const bio = document.querySelector('#speaker-bio').value;
            const title = document.querySelector('#talk-title').value;
            const abstract = document.querySelector('#talk-abstract').value;
			const consent = document.querySelector('#talk-consent').value;

            const subject = `[workshop proposal] ${title}`;
            const body = `Hi Program Committee,` +
            `\n\n` +
            `I would like to submit a talk proposal for the W3C Smart Voice Agents Workshop.` +
            `\n\n` +
            `Name: ${name}` +
            `\n\n` +
            `Bio: ${bio}` +
            `\n\n` +
            `Talk title: ${title}` +
            `\n\n` +
            `Talk abstract: ${abstract}`+
            `\n\n` +
			`Recording consent: ${consent}`+
			`\n\n` +
            `Best regards,\n${name}`;

            window.location.href =
                'mailto:group-voiceagents-ws-pc@w3.org' +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
        };
    }

	const buttonParticipant = document.querySelector('#submit-button-participant');
	if (buttonParticipant) addSubmitButtonParticipantListener();

	function addSubmitButtonParticipantListener() {
	    document.querySelector('#submit-button-participant').onclick = () => {
	        const name = document.querySelector('#participant-name').value;
	        const bio = document.querySelector('#participant-bio').value;
	        const statement = document.querySelector('#participant-statement').value;

	        const subject = `[Participant Registration] ${name}`;
	        const body = `Hi Program Committee,` +
	        `\n\n` +
	        `I would like register as a participant for the W3C Smart Voice Agents Workshop.` +
	        `\n\n` +
	        `Name: ${name}` +
	        `\n\n` +
	        `Bio: ${bio}` +
	        `\n\n` +
	        `Statement of interest: ${statement}` +
	        `\n\n` +
	        `Best regards,\n${name}`;

	        window.location.href =
	            'mailto:group-voiceagents-ws-pc@w3.org' +
	            '?subject=' + encodeURIComponent(subject) +
	            '&body=' + encodeURIComponent(body);
	    };
	}
})();
