function biodata(nama, umur) {

	// Memastikan bahwa parameter nama adalah string dan umur adalah number/integer
	if(typeof nama != 'string' || typeof umur != 'number') return false;

	let myBio = {
		name: nama,
		age: umur,
		address: "Kp. Cilongok Desa Sukamantri Kec. Pasarkemis, Kab. Tangerang, Banten",
		hobbies: ["Membaca", "Coding"],
		is_married: false,
		list_school: [{
			name: "SDN Sukaasih 1",
			year_in: 2007,
			year_out: 2013,
			major: null
		}, {
			name: "SMPN 1 Pasarkemis",
			year_in: 2013,
			year_out: 2016,
			major: null
		}, {
			name: "SMAN 11 Kab. Tangerang",
			year_in: 2016,
			year_out: 2019,
			major: "IPA"
		}],
		skills: [{
			skill_name:  "html",
			level: "beginner"
		}, {
			skill_name:  "javascript",
			level: "beginner"
		}],
		interest_in_coding: true
	}

	return JSON.stringify(myBio)
}

console.log(biodata("Rizki Budi Prasetyo", 18))