import React from "react";
import { parseISO, format } from "date-fns";
import frLocale from "date-fns/locale/fr";

export default function Date({ dateString, className }) {
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString} className={className}>
			{format(date, "iiii d MMMM Y", { locale: frLocale })}
			{/* {format(date, "d MMM. yy")} */}
		</time>
	);
}
