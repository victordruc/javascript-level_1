baterryCharge = 70 //%

chargePercentInMinutes = 10 //1% ~ 10 minutes

etWorkInMinutes = baterryCharge * chargePercentInMinutes

etWorkInHours = etWorkInMinutes / 60 //prima varianta, a doua varianta transformam chargePercentInMinutes -> chargePercentInHours 0.1666% pe ora

alert("remaining time (minutes): " + etWorkInMinutes)
alert("remaining time (hours): " + etWorkInHours)