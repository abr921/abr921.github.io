d3.csv('../datos/ao_vehiculo.csv', function(data){
		var data_array = [];
		for(i=0; i<data.length; i++){
				data_array.push([parseFloat(data[i].lat), parseFloat(data[i].lon), parseFloat(data[i].int + 8)]);
		};
		var map = L.map('vehiculo_map').setView([19.3563, -99.2266], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
		var heat = L.heatLayer(data_array, { 
			radius: 12,
			 gradient: {
			  0.2: '#ffffb2',
			  0.4: '#fd8d3c',
			  0.6: '#fd8d3c',
			  0.8: '#f03b20',
			  1: '#bd0026'
			}
		});
		map.addLayer(heat);

	}); 
