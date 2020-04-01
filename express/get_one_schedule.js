module.exports = {
    get_schedule: function get_schedule(all_semesters) {
        // input: a list, where each element (corresponding to a term) is a list of course codes
        // output: a list of course nodes, where each course node is the courses to be taked at each semester

        // looping backwards starting from the second to last semester
        let child_indices_list = [];
        let child_values_list = [];
        let best_child_value = 0;
        let best_child_index = 0;
        for (var i = all_semesters.length - 2; i >= 0; i--) {
            // looping over every course node in one semester
            for (var j = 0; j < all_semesters[i].length; j++) {
                // all_semesters[i][j] is course node

                // get indices of child nodes at the next semester
                child_indices_list = all_semesters[i][j].get_child_indices()
                child_values_list = [];
                for (var k = 0; k < child_indices_list.length; k++) {
                    child_values_list.push(all_semesters[i+1][child_indices_list[k]].get_value());
                }

                // choose the best child
                best_child_value = Math.max(child_values_list); // require Math??
                all_semesters[i][j].set_value(best_child_value);
                best_child_index = child_values_list.findIndex(element => element == best_child_value); // only return the first max index
                all_semesters[i][j].set_best_child_index(best_child_index);
            }
        }

        // looping over the first semester to determine the schedule
        let best_first_semester_value = 0;
        let best_first_semester_index = 0;
        let first_semester_values_list = [];
        for (var i = 0; i < all_semesters[0].length; i++) {
            first_semester_values_list.push(all_semesters[0][i].get_value());
        }
        best_first_semester_value = Math.math(first_semester_values_list);
        best_first_semester_index = first_semester_values_list.findIndex(element => element == best_first_semester_value);

        // get the schedule
        let schedule_list = []; // store the course nodes for every semesters
        schedule_list.push(all_semesters[0][best_first_semester_index])
        for (var i = 0; i < all_semesters.length-1; i++) {
            schedule_list.push(all_semesters[i+1][schedule_list[-1].get_best_child_index()])
        }

        return schedule_list
    },
};