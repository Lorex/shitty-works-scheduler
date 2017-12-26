/**
 * MainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');
const fs = require('fs');
const schedule = require('./../../config/schedule.json');

module.exports = {
	main: async(req, res) => {
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');
		res.write(`本週為 ${moment().format("YYYY")} 年第 ${moment().format("WW")} 週\n`)
		if (schedule.schedule[0].week == moment().format("YYYY-WW")) {
			res.write(`本週的值日生為 ${schedule.schedule[0].p1} 與 ${schedule.schedule[0].p2}\n\n`)
			res.write(`歷史紀錄\n`);
			res.write(`====================\n`);
			for (let s in schedule.schedule) {
				res.write(`${schedule.schedule[s].week} 週：${schedule.schedule[s].p1}、${schedule.schedule[s].p2}\n`);
			}
			res.end()
		} else {
			// 如果可用的員工沒了就重置
			if (schedule.employee.length == 0) {
				schedule.employee = schedule.employeeUsed;
				schedule.employeeUsed = [];
			}

			// 產生新的值日生
			let data = {
				week: moment().format("YYYY-WW"),
				p1: "",
				p2: ""
			}
			let index = Math.floor(Math.random() * schedule.employee.length)
			data.p1 = schedule.employee[index]
			schedule.employeeUsed.push(schedule.employee[index])
			schedule.employee.splice(index, 1)
			index = Math.floor(Math.random() * schedule.employee.length)
			data.p2 = schedule.employee[index]
			schedule.employeeUsed.push(schedule.employee[index])
			schedule.employee.splice(index, 1)
			schedule.schedule.unshift(data)

			// 寫回檔案
			fs.writeFileSync(__dirname + './../../config/schedule.json', JSON.stringify(schedule), 'utf-8');
			res.write(`本週的值日生為 ${schedule.schedule[0].p1} 與 ${schedule.schedule[0].p2}\n\n`);
			res.write(`歷史紀錄\n`);
			res.write(`====================\n`);
			for (let s in schedule.schedule) {
				res.write(`${schedule.schedule[s].week} 週：${schedule.schedule[s].p1}、${schedule.schedule[s].p2}\n`);
			}
		}
		res.end();
	}


};
