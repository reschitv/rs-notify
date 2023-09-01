function Alert(title, message, time, type)
	SendNUIMessage({
		action = 'open',
		title = title,
		type = type,
		message = message,
		time = time,
	})
end

RegisterNetEvent('rsNotify:Alert')
AddEventHandler('rsNotify:Alert', function(title, message, time, type)
	Alert(title, message, time, type)
end)