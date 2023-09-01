Change QBCore.Notify function in qbcore/client/functions.lua
if QBCore.Config.lxnotify == true then
	function QBCore.Functions.Notify(text, textype, length)
        if type(text) == "table" then
            local ttext = text.text or 'Placeholder'
            local caption = text.caption or 'Placeholder'
            local ttype = textype or "Info"
            if textype == "success" then
                ttype = "success"
                type2 = "BAŞARILI"
            elseif textype == "error" then
                ttype = "error"
                type2 = "DİKKAT"
            elseif textype == "warning" then
                ttype = "warning"
                type2 = "UYARI"
            else
                ttype = "info"
                type2 = "BİLGİLENDİRME"
            end
            local length = length or 5000
            TriggerEvent('rsNotify:Alert', type2, text, length, ttype)
            --TriggerEvent("Notify",ttype,caption,ttext, length)
        else
            local ttype = textype or "info"
            if textype == "success" then
                ttype = "success"
                type2 = "BAŞARILI"
            elseif textype == "error" then
                ttype = "error"
                type2 = "HATA"
            elseif textype == "warning" then
                ttype = "warning"
                type2 = "UYARI"
            else
                ttype = "info"
                type2 = "BİLGİLENDİRME"
            end
            local length = length or 5000
            TriggerEvent('rsNotify:Alert', type2, text, length, ttype)
            --TriggerEvent("Notify",ttype, type2, text, length)
        end
	end
else
	function QBCore.Functions.Notify(text, texttype, length)
	if type(text) == "table" then
	local ttext = text.text or 'Placeholder'
	local caption = text.caption or 'Placeholder'
	texttype = texttype or 'primary'
	length = length or 5000
	SendNUIMessage({
	action = 'notify',
	type = texttype,
	length = length,
	text = ttext,
	caption = caption
	})
	else
	texttype = texttype or 'primary'
	length = length or 5000
	SendNUIMessage({
	action = 'notify',
	type = texttype,
	length = length,
	text = text
	})
	end
	end
	end